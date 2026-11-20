import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import ApiKeyModal from '../../components/ApiKeyModal.jsx';

vi.mock('react-hot-toast', () => ({ default: { error: vi.fn() }, Toaster: () => null }));

describe('ApiKeyModal interaction', () => {
  it('renders an accessible dialog with a labelled field', () => {
    const { container } = render(<ApiKeyModal onSave={vi.fn()} locale="en" overlay={true} />);
    const dialog = container.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
    expect(dialog.getAttribute('aria-labelledby')).toBeTruthy();
    expect(container.querySelector('input[type="password"]')).toBeTruthy();
  });

  it('rejects an empty key and keeps focus in the field', () => {
    const onSave = vi.fn();
    render(<ApiKeyModal onSave={onSave} locale="en" overlay={true} />);
    fireEvent.change(screen.getByLabelText(/api access key/i), { target: { value: '   ' } });
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));
    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByText(/please enter your api key/i)).toBeTruthy();
  });

  it('saves a trimmed valid key', () => {
    const onSave = vi.fn();
    render(<ApiKeyModal onSave={onSave} locale="en" overlay={true} />);
    fireEvent.change(screen.getByLabelText(/api access key/i), { target: { value: '  key-123  ' } });
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));
    expect(onSave).toHaveBeenCalledWith('key-123');
  });

  it('shows the locale translated copy', () => {
    render(<ApiKeyModal onSave={vi.fn()} locale="es" overlay={true} />);
    expect(screen.getByText(/clave de acceso api/i)).toBeTruthy();
  });
});

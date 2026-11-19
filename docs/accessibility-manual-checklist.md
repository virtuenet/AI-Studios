# Manual Screen-Reader Verification Checklist

Automated axe-core and structural tests cover the machine-checkable part of
WCAG 2.1 AA. The checks below require a human with a screen reader — they are
tracked here as the remaining external qualification for accessibility.

**Required environment:** macOS VoiceOver (Safari/Chrome) and Windows NVDA
(Firefox/Chrome), latest versions.

## Shell (`/studio/image` after entering an API key)

- [ ] Page announces “AI Studios, heading level 1” on load.
- [ ] First Tab reveals the “Skip to content” link; activating it moves focus
      into the studio workspace.
- [ ] The language selector is announced as “Language, combo box” and its
      options read in their native names (English, 中文, 日本語, 한국어,
      Español, Français).
- [ ] Sidebar categories announce expanded/collapsed state and the active tab
      is marked current.
- [ ] The balance badge is not announced as a live region on every poll.

## API key modal

- [ ] Dialog is announced with its title and description; focus lands on the
      API key field.
- [ ] Tab and Shift+Tab cycle within the dialog (no focus escape).
- [ ] Submitting an empty key announces the inline error and returns focus to
      the field.
- [ ] Close button is announced as “Close”.

## Studio workspaces (Image, Video, Audio, Lip Sync, Cinema)

- [ ] The prompt textarea has an accessible name and announces placeholder
      guidance.
- [ ] Model / aspect-ratio / resolution selectors announce their labels and
      current values.
- [ ] Starting a generation announces “is generating” once; completion
      announces “Generation complete” once (no repeated announcements).
- [ ] Error notifications are announced immediately and can be dismissed.
- [ ] Generated media has a meaningful alt/label; the download action is
      labelled.
- [ ] Keyboard-only: reach every control, open/close all popovers, and run a
      generation without touching the mouse.

## Locale routes

- [ ] `/ja/studio/image`, `/ko/studio/video`, `/es/studio/audio`,
      `/fr/studio/lipsync` announce localized navigation and shell copy.
- [ ] `html lang` matches the route (`ja`, `ko`, `es`, `fr`).

## Color & zoom

- [ ] At 200% zoom and 320 CSS px width, content remains usable.
- [ ] Light and dark themes both meet contrast (automated check covers the
      API-key modal; spot-check studio result cards manually).

Record pass/fail per row with browser + screen-reader version in the PR that
closes this checklist.

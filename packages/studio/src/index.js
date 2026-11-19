"use client";

import { memo } from 'react';

// Studio components are memoized at the package boundary so that switching
// tabs (which re-renders StandaloneShell) does not re-render studios whose
// props have not changed. All studios stay mounted to preserve in-flight
// generations; memoization keeps hidden tabs cheap.
import ImageStudioBase from './components/ImageStudio';
import VideoStudioBase from './components/VideoStudio';
import ClippingStudioBase from './components/ClippingStudio';
import VibeMotionStudioBase from './components/VibeMotionStudio';
import LipSyncStudioBase from './components/LipSyncStudio';
import RecastStudioBase from './components/RecastStudio';
import CinemaStudioBase from './components/CinemaStudio';
import AudioStudioBase from './components/AudioStudio';
import MarketingStudioBase from './components/MarketingStudio';
import WorkflowStudioBase from './components/WorkflowStudio';
import AgentStudioBase from './components/AgentStudio';
import DesignAgentStudioBase from './components/DesignAgentStudio';
import AppsStudioBase from './components/AppsStudio';
import McpCliStudioBase from './components/McpCliStudio';
import AiInfluencerStudioBase from './components/AiInfluencerStudio';
import LayersStudioBase from './components/LayersStudio';
import MotionControlStudioBase from './components/MotionControlStudio';

export const ImageStudio = memo(ImageStudioBase);
export const VideoStudio = memo(VideoStudioBase);
export const ClippingStudio = memo(ClippingStudioBase);
export const VibeMotionStudio = memo(VibeMotionStudioBase);
export const LipSyncStudio = memo(LipSyncStudioBase);
export const RecastStudio = memo(RecastStudioBase);
export const CinemaStudio = memo(CinemaStudioBase);
export const AudioStudio = memo(AudioStudioBase);
export const MarketingStudio = memo(MarketingStudioBase);
export const WorkflowStudio = memo(WorkflowStudioBase);
export const AgentStudio = memo(AgentStudioBase);
export const DesignAgentStudio = memo(DesignAgentStudioBase);
export const AppsStudio = memo(AppsStudioBase);
export const McpCliStudio = memo(McpCliStudioBase);
export const AiInfluencerStudio = memo(AiInfluencerStudioBase);
export const LayersStudio = memo(LayersStudioBase);
export const MotionControlStudio = memo(MotionControlStudioBase);

export * from './muapi';

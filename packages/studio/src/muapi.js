/**
 * Muapi API client — barrel re-export.
 *
 * Implementation split into domain modules under client/:
 *   core.js       — BASE_URL, retry, streaming, polling, helpers
 *   generation.js — generateImage, generateVideo, processV2V, …
 *   uploads.js    — uploadFile
 *   balance.js    — getUserBalance
 *   workflows.js  — getTemplateWorkflows, executeWorkflow, …
 *   agents.js     — getTemplateAgents, sendAgentChatMessage, …
 *   apps.js       — calculateDynamicCost, runClipping, …
 */

export {
  setStreamingEnabled,
  isStreamingEnabled,
  streamGeneration,
} from './client/core';

export {
  generateImage,
  generateI2I,
  decomposeLayers,
  generateVideo,
  generateI2V,
  generateMarketingStudioAd,
  processV2V,
  estimateV2VCost,
  processRecast,
  processMotionControl,
  processLipSync,
  generateAudio,
} from './client/generation';

export { uploadFile } from './client/uploads';
export { getUserBalance } from './client/balance';

export {
  getTemplateWorkflows,
  getUserWorkflows,
  getPublishedWorkflows,
  createWorkflow,
  updateWorkflowName,
  deleteWorkflow,
  getWorkflowInputs,
  executeWorkflow,
  getAllNodeSchemas,
  getWorkflowData,
  getNodeSchemas,
  runSingleNode,
  deleteNodeRun,
  getNodeStatus,
} from './client/workflows';

export {
  getTemplateAgents,
  getUserAgents,
  getPublishedAgents,
  getUserConversations,
  getAgentBySlug,
  getAgentConversation,
  sendAgentChatMessage,
  pollAgentChatResult,
  createAgent,
} from './client/agents';

export {
  calculateDynamicCost,
  registerAppInterest,
  getAppInterests,
  getHistory,
  deleteMedia,
  runClipping,
  runMotionGraphics,
  runMotionGraphicsEdit,
  upscaleImage,
  removeBackground,
  expandImage,
} from './client/apps';

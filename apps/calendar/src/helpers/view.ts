import { DEFAULT_EVENT_PANEL, DEFAULT_TASK_PANEL } from '@src/constants/view';

import type { EventView, Swimlane, TaskView, WeekOptions } from '@t/options';

export function getActivePanels(
  taskView: Required<WeekOptions>['taskView'],
  eventView: Required<WeekOptions>['eventView']
): (TaskView | EventView | Swimlane)[] {
  const activePanels: (TaskView | EventView | Swimlane)[] = [];

  if (taskView === true) {
    activePanels.push(...DEFAULT_TASK_PANEL);
  } else if (Array.isArray(taskView)) {
    activePanels.push(...taskView);
  } else if (typeof taskView === 'object' && taskView !== null) {
    activePanels.push(...taskView.swimlanes);
  }

  if (eventView === true) {
    activePanels.push(...DEFAULT_EVENT_PANEL);
  } else if (Array.isArray(eventView)) {
    activePanels.push(...eventView);
  }

  return activePanels;
}

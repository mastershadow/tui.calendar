import { h } from 'preact';

import type { Story } from '@storybook/preact';

import { SwimDay } from '@src/components/view/swimday';

import { ProviderWrapper } from '@stories/util/providerWrapper';
import { createRandomEventModelsForMonth } from '@stories/util/randomEvents';

export default { title: 'Views/SwimDayView', component: SwimDay };

const Template: Story = (args) => (
  <ProviderWrapper options={args.options} events={args.events}>
    <SwimDay />
  </ProviderWrapper>
);

const lanes = [
  { id: 'gatto', label: 'Gatto' },
  { id: 'cane', label: 'Cane' },
  { id: 'pecora', label: 'Pecora' },
  { id: 'maiale', label: 'Maiale' },
];

export const basic = Template.bind({});
basic.args = {
  options: {
    week: {
      taskView: {
        swimlanes: lanes,
      },
    },
  },
};

const randomEventsData = [
  ...createRandomEventModelsForMonth(100)
    .filter((em) => !em.isAllday)
    .map((em, index) => {
      em.category = lanes[index % lanes.length].id;

      return em;
    }),
];

export const randomEvents = Template.bind({});
randomEvents.args = {
  events: randomEventsData,
  options: {
    useFormPopup: true,
    useDetailPopup: true,
    week: {
      taskView: {
        swimlanes: lanes,
      },
    },
  },
};

import { defineEventHandler } from 'h3';

const date_get = defineEventHandler(() => {
  return {
    date: new Date()
  };
});

export { date_get as default };
//# sourceMappingURL=date.get.mjs.map

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    'gas-lanes-and-stats',
    {
      type: 'category',
      label: 'AI Connect (MCP)',
      items: [
        'ai-connect/overview',
        'ai-connect/install-setup',
        'ai-connect/usage',
        'ai-connect/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/authentication',
        'api/rate-limits',
        'api/errors',
        'api/examples',
      ],
    },
    {
      type: 'category',
      label: 'Alerts',
      items: [
        'alerts/overview',
        'alerts/creating-alerts',
        'alerts/thresholds-and-cooldowns',
      ],
    },
    'faq',
  ],
};

export default sidebars;

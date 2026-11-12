import { defineMdastPlugin } from 'satteri';

/**
 * Sätteri (Astro 7 Markdown processor) plugin.
 * Wraps every Markdown table in a focusable, horizontally scrollable region, so wide data
 * tables stay usable on a 360 px screen without breaking table semantics.
 */
export const tableWrap = defineMdastPlugin({
  name: 'table-wrap',
  table(node, ctx) {
    if (node.data?.wrapped) return;
    ctx.replaceNode(node, {
      type: 'tableWrap',
      data: {
        hName: 'div',
        hProperties: { className: ['table-wrap'], tabIndex: 0, role: 'region', ariaLabel: 'Data table, scrollable' },
      },
      children: [{ ...node, data: { ...(node.data ?? {}), wrapped: true } }],
    });
  },
});

/**
 * Removes HTML comments (<!-- ... -->) from Markdown output, so TODO notes left in the
 * content files never reach the published HTML source.
 */
export const stripComments = defineMdastPlugin({
  name: 'strip-comments',
  html(node, ctx) {
    const value = node.value.trim();
    if (value.startsWith('<!--') && value.endsWith('-->')) ctx.removeNode(node);
  },
});

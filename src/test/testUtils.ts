/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

import { shallow } from "enzyme";

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

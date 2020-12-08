import { shallowMount } from '@vue/test-utils';
import Menu from '../../../src/components/sections/Menu.vue';

let wrapper;

describe('Menu component', () => {

  it('has Button import', () => {
    // GIVEN
    const { components } = Menu;
    // THEN
    expect(components).toHaveProperty('Button');
  });

  describe('when component is mounted', () => {
    beforeEach(() => {
      wrapper = shallowMount(Menu);
    });

    afterEach(() => {
      wrapper.destroy();
    });

    it('should render to a snapshot when component is initialized', () => {
      //THEN
      expect(wrapper.element).toMatchSnapshot();
    });
  });

});
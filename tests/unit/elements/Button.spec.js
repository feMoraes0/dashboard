import { shallowMount } from '@vue/test-utils';
import Button from '../../../src/components/elements/Button.vue';

let wrapper;

const factory = (propsData) => {
  return shallowMount(Button, {
    propsData: {
      ...propsData
    }
  });
}

describe('Button Component', () => {
  beforeEach(() => {
    wrapper = factory();
  });
  
  afterEach(() => {
    wrapper.destroy();
  });

  it('has property with default value', () => {
    // THEN
    expect(wrapper.vm.$props).toEqual({'type': 'button'});
  });

  it('should return btn-primary class', () => {
    // THEN
    expect(wrapper.vm.buttonClass).toEqual('btn-primary');
  });

  describe('with not default property', () => {
    beforeEach(() => {
      wrapper = factory({
        type: 'link'
      });
    });

    afterEach(() => {
      wrapper.destroy();
    });

    it('has property modified', () => {
      // THEN
      expect(wrapper.vm.$props).toEqual({'type': 'link'});
    });

    it('should return btn-link class', () => {
      // THEN
      expect(wrapper.vm.buttonClass).toEqual('btn-link');
    });
  })
});
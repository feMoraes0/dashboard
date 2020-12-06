import { mount } from '@vue/test-utils';
import Button from '../../src/components/elements/Button.vue';

const factory = () => {
  return mount(Button);
}

describe('Button Component', () => {
  const wrapper = factory();

  it('has property with default value', () => {
    expect(wrapper.vm.$props).toEqual({'type': 'button'});
  });
});
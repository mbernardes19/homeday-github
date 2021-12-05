import { shallowMount } from '@vue/test-utils'
import Step2 from '@/slides/Step2'
import routerMock from '../mocks/router';

describe('Step2.vue slide', () => {
  const routeMock = {
    query: {
      step: 2
    }
  }

  it('renders with the next button disabled', () => {
    const wrapper = shallowMount(Step2, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })

    expect(wrapper.find('.slide__button--next').attributes().disabled === undefined).toBe(false);
  })

  it('makes next button enabled when all fields are valid', async () => {
    const wrapper = shallowMount(Step2, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })

    await wrapper.find('input#email').setValue('test@email.com');
    await wrapper.find('input#terms-and-services').trigger('click');
    expect(wrapper.find('.slide__button--next').attributes().disabled === undefined).toBe(true);
  })

  it('shows error message when email is invalid', async () => {
    const wrapper = shallowMount(Step2, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })

    await wrapper.find('input#email').setValue('test@');
    await wrapper.find('input#terms-and-services').trigger('click');
    expect(wrapper.find('.slide__field--error-message').isVisible()).toBe(true);
  })
})
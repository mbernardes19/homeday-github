import { shallowMount } from '@vue/test-utils'
import Step1 from '@/slides/Step1';
import routerMock from '../mocks/router';

describe('Step1.vue slide', () => {
  const routeMock = {
    query: {
      step: 1
    }
  }

  it('renders with the next button disabled', () => {
    const wrapper = shallowMount(Step1, {
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
    const wrapper = shallowMount(Step1, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })

    await wrapper.find('input#first-name').setValue('Test name');
    await wrapper.find('input#last-name').setValue('Test lastname');
    await wrapper.find('input#github-username').setValue('testusername');

    expect(wrapper.find('.slide__button--next').attributes().disabled === undefined).toBe(true);
  })
})

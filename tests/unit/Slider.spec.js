import { mount } from '@vue/test-utils'
import Slider from '@/components/Slider'
import slides from '../../src/slides';
import routerMock from '../mocks/router';

describe('Slider.vue', () => {
  const routeMock = {
    query: {
      step: 0
    }
  }

  it('renders first slide when loaded', () => {
    const wrapper = mount(Slider, {
      props: { slides },
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })
    expect(wrapper.text()).toContain('Welcome to Find-a-GitHub-user!')
  })

  it('renders slide based on the current route', () => {
    const mockRoute = {
      query: {
        step: 1
      }
    }

    const wrapper = mount(Slider, {
      props: { slides },
      global: {
        mocks: {
          $route: mockRoute,
          $router: routerMock
        }
      }
    })
    
    expect(wrapper.text()).toContain("First, I'll need these info about you");
  })

  it('pushes to browser history when next button is clicked', () => {
    const wrapper = mount(Slider, {
      props: { slides },
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })
    
    wrapper.find('button').trigger('click');
    expect(routerMock.push).toHaveBeenCalledWith({"path": "/", "query": {"step": 1}})
  })
})

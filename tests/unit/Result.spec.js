import { mount } from '@vue/test-utils'
import Result from '@/slides/Result';
import routerMock from '../mocks/router';
import flushPromises from 'flush-promises';
jest.mock('../../src/api', () => ({
  getGitHubProfile: jest.fn(),
}))
import api from '../../src/api';


describe('Result.vue slide', () => {
  const routeMock = {
    query: {
      step: 3
    }
  }

  it('shows loading animation while doing request', async () => {
    const wrapper = mount(Result, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })

    expect(wrapper.find('.loader').exists()).toBe(true);
  })

  it('renders github profile after successful api request', async () => {
    api.getGitHubProfile.mockImplementation(() => Promise.resolve({
      login: 'mbernardes19',
      avatar_url: 'https://avatars.githubusercontent.com/u/26047592?v=4',
      name: 'Matheus Bernardes',
      company: null,
      blog: 'https://matheusbernardes.netlify.app',
      location: 'São Paulo, Brazil',
      email: null,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in mi pellentesque, pretium nulla a, sodales nisl. Aliquam diam lectus, hendrerit quis quam ',
      twitter_username: 'mbernardes19',
      followers: 26,
      following: 16,
    }));

    const wrapper = mount(Result, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })
    
    await flushPromises();

    expect(wrapper.find('h1').text()).toContain("And BAM, here's your profile:");
  })

  it('renders error message after unsuccessful api request', async () => {
    api.getGitHubProfile.mockImplementation(() => Promise.reject({message: 'Error while fetching GitHub profile'}));

    const wrapper = mount(Result, {
      global: {
        mocks: {
          $route: routeMock,
          $router: routerMock
        }
      }
    })
    
    await flushPromises();

    expect(wrapper.find('.slide--result').text()).toContain('Error while fetching GitHub profile');
  })
})

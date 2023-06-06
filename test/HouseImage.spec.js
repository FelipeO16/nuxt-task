import { mount } from '@vue/test-utils'
import HouseImage from '@/components/atoms/HouseImage.vue'

describe('HouseImage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HouseImage)
    expect(wrapper.vm).toBeTruthy()
  })
})

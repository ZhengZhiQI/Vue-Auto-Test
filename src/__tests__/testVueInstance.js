import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

describe('Component', () => {
    const wrapper = mount(HelloWorld)
    it('is a Vue instance', () => {

        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })

    it('change props test', () => {
        wrapper.setProps({
            msg: 'test set props msg'
        })
        expect(wrapper.html()).toContain('test set props msg')
        // expect(wrapper.html()).contains('test set props msg').toBe(true)
    })
    it('button click',() => {
        expect(wrapper.vm.clickCount).toBe(0)
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.clickCount).toBe(1)
    })
});


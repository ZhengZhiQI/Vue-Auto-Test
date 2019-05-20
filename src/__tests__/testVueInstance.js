import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

describe('Component', () => {
    const wrapper = mount(HelloWorld)
    test('is a Vue instance', () => {

        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(false)
    })

    it('change props test', () => {
        wrapper.setProps({
            msg: 'test set props msg'
        })
        expect(wrapper.html()).toContain('test set props msg')
        // expect(wrapper.html()).contains('test set props msg').toBe(true)
    })
});


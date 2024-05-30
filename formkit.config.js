import { generateClasses } from "@formkit/themes"

const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'mb-2',
        message: 'bg-red-500 text-white text-center text-sm font-bold uppercase p-2 rounded',
        label: 'block mb-1 font-bold text-lg',
        input: 'w-full p-2 border border-gray-400 rounded text-gray-700 placeholder-gray-400'
      },
      button: {
        input: '$reset w-full bg-red-400 hover:bg-red-500 transition-colors text-white p-2 rounded font-bold uppercase'
      },
      submit: {
        wrapper: 'mt-3',
        input: '$reset w-full bg-blue-400 hover:bg-blue-500 transition-colors text-white p-2 rounded font-bold uppercase'
      },
    })
  }
}

export default config

// MOCK
const postItemSuccess = {
  status: 'Success',
  message: '新增成功',
  data: [
    {
      name: 'naiky',
      avatar: 'https://picsum.photos/600/600',
      image: 'https://picsum.photos/600/400',
      createdAt: '2022/1/10 12:00',
      content:
        '外面看起來就超冷.... 我決定回被窩繼續睡....外面看起來就超冷....',
    },
    {
      name: 'naiky',
      avatar: 'https://picsum.photos/600/600',
      image: 'https://picsum.photos/600/400',
      createdAt: '2022/1/10 12:00',
      content:
        '外面看起來就超冷.... 我決定回被窩繼續睡....外面看起來就超冷....',
    },
    {
      name: 'naiky',
      avatar: 'https://picsum.photos/600/600',
      image: 'https://picsum.photos/600/400',
      createdAt: '2022/1/10 12:00',
      content:
        '外面看起來就超冷.... 我決定回被窩繼續睡....外面看起來就超冷....',
    },
  ],
}

const postItemApi = async () => postItemSuccess

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', async (e) => {
  try {
    console.log('SUBMIT')
    e.preventDefault()
    const formElement = e.target.form
    const postData = {
      name: formElement[0].value,
      avatar: formElement[1].value,
      image: formElement[2].value,
      content: formElement[3].value,
    }
    const { status, message, data } = await postItemApi(postData)
    if (status === 'Success') {
      await alert('新增成功!')
      location.href = '/'
    } else {
      await alert('操作失敗!')
      form.reset()
    }
  } catch (error) {
    console.log(error)
  }
})

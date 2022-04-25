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

const postItemApi = async (data) =>
  axios.post('https://week2-post-project.herokuapp.com/posts', data)

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', async (e) => {
  try {
    e.preventDefault()
    const formElement = e.target.form
    const defaultAvatar =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4Lz_27xIJEYJam3xsO63X6qvlIWpHarS1Q&usqp=CAU'

    const image = formElement[2].value.trim() || undefined

    const postData = {
      name: formElement[0].value.trim(),
      avatar: formElement[1].value.trim() || defaultAvatar,
      image,
      content: formElement[3].value.trim(),
    }
    const {
      data: { status, message },
    } = await postItemApi(postData)

    if (status === 'Success') {
      await Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500,
      })
      location.href = '/'
    }
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: error.response.data.errors,
      icon: 'error',
      confirmButtonText: 'OK',
    })

    form.reset()
  }
})

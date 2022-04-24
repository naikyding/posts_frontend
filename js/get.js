;(function () {
  // MOCK
  const getListSuccess = {
    status: 'Success',
    message: '操作成功',
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

  // API
  const getListApi = () => getListSuccess
  const listElement = document.querySelector('#list')

  const createPostItem = ({ name, avatar, image, content, createdAt }) => {
    return `
    <div class="post">
      <div class="item border-rounded mt-4">
        <div class="item__header d-flex">
          <div class="item__header-avatar mr-4">
            <img src="${avatar}" alt="" />
          </div>
          <div class="item__header-dec">
            <div class="name text-bold">${name}</div>
            <div class="created-time mt-2">${createdAt}</div>
          </div>
        </div>
        <div class="item__content mx-4">
        ${content}
        </div>
        <div class="item__img">
          <img
            width="100%"
            class="border-rounded"
            src="${image}"
            alt=""
          />
        </div>
      </div>
    </div>
  `
  }

  const getList = async () => {
    try {
      const { data } = await getListApi()
      if (data.length < 1) return

      let listsElement = ''
      data.forEach((list) => {
        listsElement += createPostItem(list)
      })
      listElement.innerHTML = listsElement
    } catch (error) {
      console.log(error)
    }
  }

  getList()
})()

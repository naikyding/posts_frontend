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
  const getListApi = () =>
    axios.get('https://week2-post-project.herokuapp.com/posts')

  const listElement = document.querySelector('#list')

  const createNoDataDisplay = (el) => {
    el.innerHTML = `
      <div class="post">
        <div class="nodata-item border-rounded mt-4 no-data">
          <div class="bar px-4 py-5 border-t-1">
            <span class="circle"></span>
          </div>
          <p class="no-data text-center py-8">目前尚無動態，新增一則貼文吧！</p>
        </div>
      </div>
    `
  }

  const createPostItem = ({ name, avatar, image, content, createdAt }) => {
    let createTime = dayjs(createdAt).format('YYYY/MM/DD HH:mm')
    let imageHtml = image
      ? `
        <div class="item__img">
          <img
            width="100%"
            class="border-rounded"
            src="${image}"
            onerror="this.onerror=null;this.src='https://thumbs.dreamstime.com/b/error-template-icon-dead-site-page-not-found-trouble-system-eps-164583533.jpg';"
            alt="${content}"
          />
        </div>
    `
      : ''

    let html = `
    <div class="post">
      <div class="item border-rounded mt-4">
        <div class="item__header d-flex">
          <div class="item__header-avatar mr-4">
            <img src="${avatar}"
            onerror="this.onerror=null;this.src='https://thumbs.dreamstime.com/b/error-template-icon-dead-site-page-not-found-trouble-system-eps-164583533.jpg';"
            alt="${name}" />
          </div>
          <div class="item__header-dec">
            <div class="name text-bold">${name}</div>
            <div class="created-time mt-2">${createTime}</div>
          </div>
        </div>
        <div class="item__content mt-4 ${!image ? '' : 'mb-4'}">
        ${content}
        </div>
        ${imageHtml}
      </div>
    </div>
  `
    return html
  }

  const getList = async () => {
    try {
      const {
        data: { data },
      } = await getListApi()
      console.log(data)
      if (data.length < 1) return createNoDataDisplay(listElement)

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

export default class Banner {
  constructor ({ imageUrl, targetId, targetType, titleColor, typeTitle, url, encodeId, song }) {
    this.imageUrl = imageUrl
    this.targetId = targetId
    this.targetType = targetType
    this.titleColor = titleColor
    this.typeTitle = typeTitle
    this.url = url
    this.encodeId = encodeId
    this.song = song
  }
}

// 由推荐创建banner
export function createBannerByRecommend (banner) {
  return new Banner({
    imageUrl: banner.imageUrl,
    targetId: banner.targetId,
    targetType: banner.targetType,
    titleColor: banner.titleColor,
    typeTitle: banner.typeTitle,
    url: banner.url,
    encodeId: banner.encodeId,
    song: banner.song
  })
}

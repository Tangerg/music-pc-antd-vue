export default class Banner {
  constructor ({ imageUrl, targetId, targetType, titleColor, typeTitle, url, encodeId }) {
    this.imageUrl = imageUrl
    this.targetId = targetId
    this.targetType = targetType
    this.titleColor = titleColor
    this.typeTitle = typeTitle
    this.url = url
    this.encodeId = encodeId
  }
}

export function createBanner (banner) {
  return new Banner({
    imageUrl: banner.imageUrl,
    targetId: banner.targetId,
    targetType: banner.targetType,
    titleColor: banner.titleColor,
    typeTitle: banner.typeTitle,
    url: banner.url,
    encodeId: banner.encodeId
  })
}

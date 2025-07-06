# 狂野大拯救

原创动力的小游戏“狂野大拯救”的备份。

- 游戏 ID：`202507`
- 备份时间：2025 年 7 月 6 日

## 修改

为保证游戏能够离线运行，修改了以下内容：

- 强制开启`debug`模式，避免验证微信登陆。
- 将阿里云 OSS 的资源链接改为本地链接，并备份图片到本地。

## 链接

浏览器可能会禁止背景音乐自动播放，关闭再打开背景音乐即可恢复正常。

- [官方游戏链接](http://act.22dm.com/202507)
- [修改版游戏链接](https://xyy-huijiwiki.github.io/act.22dm.com-202507/)
- [羊羊百科](https://xyy.huijiwiki.com/wiki/狂野大拯救)

## 图片历史

| 旧                                                                                                                          | 新                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![role-1.old.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/icon/role-1.old.png)<br/>**role-1.old.png** | ![role-1.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/icon/role-1.png)<br/>**role-1.png** |

## API 历史

### `init`

```bash
curl 'http://ixyy.22dm.com/cgame/init?activityKey=202507' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: de-DE,de;q=0.9,en-GB;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'DNT: 1' \
  -H 'Origin: http://127.0.0.1:5500' \
  -H 'Pragma: no-cache' \
  -H 'Proxy-Connection: keep-alive' \
  -H 'Referer: http://127.0.0.1:5500/' \
  -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/138.0.0.0' \
  --insecure
```

#### 2025 年 7 月 5 日 22:00

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "197db0ed0115c215e48",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 6,
      "everyLevelScore": 3000,
      "showRank": 0,
      "skin": [1, 1, 1, 1, 1, 1],
      "levelScore": [3, 4, 5, 5, 5, 5],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
      "everyTimeScore": 50,
      "puzzleIdList": [3, 4],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60],
      "whiteList": ["ofN_u6nBbWm3k8KmgyWetjEKIGaE"],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3]
      ]
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

#### 2025 年 7 月 6 日 19:30

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "197df7e3a08f6b18f26",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 7,
      "everyLevelScore": 3000,
      "showRank": 0,
      "skin": [1, 1, 1, 1, 1, 1, 1],
      "levelScore": [3, 4, 5, 5, 5, 5, 5],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5-0706.jpg",
        "6-0706.jpg"
      ],
      "everyTimeScore": 50,
      "puzzleIdList": [5, 6],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60, 60],
      "whiteList": ["ofN_u6nBbWm3k8KmgyWetjEKIGaE"],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3],
        [2, 3]
      ]
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

## 代办

- [ ] 模拟`ixyy.22dm.com`的接口。

class Message {
    type
    userId
    msgId
    msgContent
    broadLocation
    specificLocation
    timeSent


    constructor(uid, mid, msc, bLoc, sLoc) {
        this.type = "message"
        this.userId = uid
        this.msgId = mid
        this.msgContent = msc
        this.broadLocation = bLoc
        this.specificLocation = sLoc
        this.timeSent = new Date().getTime()
    }
}

class GeoLocation {
    type
    broadLocation
    specificLocation
    timeSent

    constructor(bLoc, sLoc) {
        this.type = "location"
        this.broadLocation = bLoc
        this.specificLocation = sLoc
        this.timeSent = new Date().getTime()
    }
}

// tester stuff, remove later
let bCoords = [0, 0]
let sCoords = [[-0.0002, -0.0002], [0.0002, 0.0002]]
console.log(JSON.stringify(new Message("q3rt44wtg", "ebahfshjgrg", "Alex called you fat in Japanese", bCoords, sCoords)))
console.log(JSON.stringify(new GeoLocation(bCoords, sCoords)))
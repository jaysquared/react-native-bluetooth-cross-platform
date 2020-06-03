import Foundation

@objc(NetworkManagerEventEmitter)
open class NetworkManagerEventEmitter: RCTEventEmitter {
  
  override init() {
    super.init()
    EventEmitter.sharedInstance.registerEventEmitter(eventEmitter: self)
  }

  @objc override open class func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  /// Base overide for RCTEventEmitter.
  ///
  /// - Returns: all supported events
  @objc open override func supportedEvents() -> [String] {
    return EventEmitter.sharedInstance.allEvents
  }
  
}

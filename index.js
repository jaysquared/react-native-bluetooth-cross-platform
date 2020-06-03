import {
  NativeModules,
  NativeEventEmitter,
  Platform,
} from 'react-native'
import React from 'react'

var NativeManager = NativeModules.NetworkManager
var NativeEmitter = new NativeEventEmitter(Platform.select({
  ios: NativeModules.NetworkManagerEventEmitter,
  android: NativeModules.NetworkManager,
}))

class NetworkManager {
  // kind can be one of "WIFI", "BT", and "WIFI-BT"
  browse(kind) {
    NativeManager.browse(kind);
  }

  // kind can be one of "WIFI", "BT", and "WIFI-BT"
  advertise(kind) {
    NativeManager.advertise(kind);
  }

  stopAdvertising() {
    NativeManager.stopAdvertising();
  }

  stopBrowsing() {
    NativeManager.stopBrowsing();
  }

  disconnectFromPeer(peerId) {
    NativeManager.disconnectFromPeer(peerId);
  }

  inviteUser(peerId) {
    NativeManager.inviteUser(peerId);
  }

  sendMessage(message, peerId) {
    NativeManager.sendMessage(message, peerId);
  }

  acceptInvitation(peerId) {
    NativeManager.acceptInvitation(peerId);
  }

  async getNearbyPeers(callback) {
    return await NativeManager.getNearbyPeers();
  }
  
  async getConnectedPeers(peers) {
    return await NativeManager.getConnectedPeers();
  }
  /*listener callbacks
  peer contains .id (string), type(string), connected(bool), message(string), display name(string)
  */
  addPeerDetectedListener(callback) {
    return NativeEmitter.addListener(
    'detectedUser',
    (peer) =>  callback(peer)
    )
  }
  addPeerLostListener(callback) {
    return NativeEmitter.addListener(
    'lostUser',
    (peer) => callback(peer)
    )
  }
  addReceivedMessageListener(callback) {
    return NativeEmitter.addListener(
      'messageReceived',
      (peer) => callback(peer)
    );
  }
  addInviteListener(callback) {
    return NativeEmitter.addListener(
      'receivedInvitation',
      (peer) => callback(peer)
    )
  }
  addConnectedListener(callback) {
    return NativeEmitter.addListener(
      'connectedToUser',
      (peer) => callback(peer)
    )
  }
}

module.exports = new NetworkManager()

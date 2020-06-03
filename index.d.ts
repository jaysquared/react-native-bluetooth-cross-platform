declare module 'react-native-bluetooth-cross-platform' {
  export type ConnectionType = 'WIFI' | 'BT' | 'WIFI-BT';
  export type BroadcastType = 'ADVERTISER' | 'BROWSER' | 'ADVERTISER_BROWSER';

  export interface Peer {
    id: string,
    type: BroadcastType,
    connected: boolean,
    displayName: string;
    message?: any;
  }
  
  /**
   * @description This is used for when you're looking to connect to a device that is advertising.
   * @param {ConnectionType} browsingType what channel do you want to browse on?
   * @returns {void} 
   */
  function browse(browsingType: ConnectionType): void;

  /**
   * @description This is used for when you're wanting to accept connections.
   * @param {ConnectionType} advertisingType how do you want to advertise?
   * @returns {void}
   */
  function advertise(advertisingType: ConnectionType): void;

  /**
   * @description Function to stop advertising.
   * @returns {void}
   */
  function stopAdvertising(): void;

  /**
   * @description Function to stop browsing for connections.
   * @returns {void}
   */
  function stopBrowsing(): void;

  /**
   * @description Function used to disconnect from an already connected peer.
   * @param {string} peerId the UUID of the device you'd want to connect to.
   * @returns {void}
   */
  function disconnectFromPeer(peerId: string): void;

  /**
   * @description Function used to invite a peer.
   * @param {string} peerId UUID of the device you'd wish to disconnect from.
   * @returns {void}
   */
  function inviteUser(peerId: string): void;

  /**
   * @description Sends a message to a connected Peer.
   * @param {data|???} message message to send to that device.
   * @param {string} peerId UUID of the device you'd like to send the message to.
   * @returns {void}
   */
  function sendMessage(message: any, peerId: string): void;

  /**
   * @description Accept a Peers invitation.
   * @param {string} peerId UUID of the device you'd wish to accept the connection of.
   * @returns {void}
   */
  function acceptInvitation(peerId: string): void;

  /**
   * @description Get nearby peers that are open to connect.
   * @returns {Peer[]}
   */
  function getNearbyPeers(): Peer[];

  /**
   * @description Returns a list of peers that the device is connected to.
   * @returns {Peer[]}
   */
  function getConnectedPeers(): void;

  /**
   * @description This is used when you wish to 'advertise' and are looking for Peers.
   * @param {Function} callback Event Listener callback when a Peer has been detected
   * @returns {void}
   */
  function addPeerDetectedListener(callback: Function): EmitterSubscription;

  /**
   * @description This will be used when a connected Peer has been lost/disconnected.
   * @param {Function} callback Event Listener when a Peer is lost
   * @returns {void}
   */
  function addPeerLostListener(callback: Function): EmitterSubscription;

  /**
   * @description This is used when trying to listen for messages being received.
   * @param {Function} callback Event Listener when a message has been received
   * @returns {void}
   */
  function addReceivedMessageListener(cb: Function): EmitterSubscription;

  /**
   * @description This is used when you're advertising and wishing to connect.
   * @param {Function} callback Event Listener for when an invite has been sent out
   * @returns {void}
   */
  function addInviteListener(cb: Function): EmitterSubscription;
  
  /**
   * @description This is used when a Peer has been connected.
   * @param {Function} callback Event Listener for when a connection has been made
   * @returns {void}
   */
  function addConnectedListener(cb: Function): EmitterSubscription;
}
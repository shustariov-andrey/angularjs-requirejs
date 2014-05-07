define([
   'module',
   'src/cmn/core/servicefactory/module',
   'src/cmn/core/entityregistry/module'
], function(module, ServiceFactory, EntityRegistry) {
   'use strict';

   /**
    * Simple service for communication between MessageList and MessageDetails
    * components - Mediator
    */
   ServiceFactory.register(module.id, [function() {

      var messages = EntityRegistry.create('Message', [
         {
            title : 'message 1',
            details : 'some additional info'
         },
         {
            title : 'Hello, world',
            details : 'Hello world is output example'
         },
         {
            title : 'Another message',
            details : 'Another description'
         }
      ]);

      var activeMessage = messages[0];

      this.getMessages = function() {
         return messages;
      };

      this.setActiveMessage = function(_activeMessage) {
         activeMessage = _activeMessage;
      };

      this.getActiveMessage = function() {
         return activeMessage;
      };
   }]);
});
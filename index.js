require('dotenv').config()
const RabbitConnectionManager = require('./message_stream/RabbitMQConnectionManager')
const { messageTypeQueue } = require("./helper/messageType")
const RABBIT_MQ_INSTANCE_NAME = process.env.RABBIT_MQ_INSTANCE_NAME;

const SERVER_AUTH = process.env.SERVER_AUTH

const launchServer = async () => {
    try {
      await RabbitConnectionManager.initialize()
      await RabbitConnectionManager.listenToQueueMessages(RABBIT_MQ_INSTANCE_NAME,SERVER_AUTH,messageTypeQueue)
      console.log('[SERVER] User service is running successfully')

    } catch (error) {
    console.log(error)
    }
  }
  
  launchServer()
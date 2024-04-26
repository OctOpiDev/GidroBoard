import React, { useEffect, useState } from 'react'
import * as mqtt from 'mqtt'
import { message } from 'antd'

const TEMPERATURE_TOPIC = 'test9999/data'

const options = {

    username: 'u_TU5LJ3',
    password: 'kHHg7j0S',
    port: 10453
  };

export default function DocsPage() {
    const [temp, setTemp] = useState({temper: ''})

    useEffect(()=> {
const client = mqtt.connect('m3.wqtt.ru', options)
client.on('connect', handleConnection)

    function handleConnection(){
        client.subscribe(TEMPERATURE_TOPIC)

        client.on('message', (topic, message)=>{
            if(topic === TEMPERATURE_TOPIC) setTemp(temp=> ({...temp, temper: message.toString()}))
        })
    }

    },[])
  return (
    <>
    <div>DocsPage</div>
    {temp.temper}
    </>
  )
}

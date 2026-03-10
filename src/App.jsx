import React from 'react'
import "animate.css"
import { Button, DatePicker, Form, Input } from 'antd'
import { ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
      <div className='bg-white rounded-4xl shadow-lg w-6/12 p-8'>
      <h1 className='text-4xl font-bold mb-6'>📅 Meeting Scheduler</h1>
      <Form>
        <Form.Item
        label="Meeting"
        className='font-medium'
        name="meeting_name"
        rules={[{required:true}]}
        >
          <Input 
          size='large'
          placeholder='Product Update'
          />

        </Form.Item>

         <Form.Item
        label="Description"
        className='font-medium'
        name="description"
        rules={[{required:true}]}
        >

          <Input.TextArea
          size='large'
          placeholder='Description'
          rows={5}
          />
        </Form.Item>

         <Form.Item
        label="Datetime"
        className='font-medium'
        name="datetime"
        rules={[{required:true}]}
        >

          <DatePicker
          showTime="true"
          size='large'
          placeholder='Chooes Date time'
          className='!w-full'
          />
        </Form.Item>

        <Form.Item>
          <Button icon={<ArrowRight className='w-4 h-4' />} size='large' type='primary' className='!w-full' htmlType='submit'>Scedule Now</Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  )
}

export default App

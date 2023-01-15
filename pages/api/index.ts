import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs'
import config from '../../config/smtp.config'

type ResData = {
  code: number
  message: string
  error_message?: string
}

const client = new SMTPClient(config)

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  const { form_name, to_email, subject, text } = req.body

  if (!to_email || !subject || !text) {
    res.status(400).json({ code: 1, message: '缺少参数' })
    return
  }

  const sendData = {
    from: `${form_name || ''}<${config.user}>`,
    to: `<${to_email}>`,
    subject,
    text,
  }

  client.send(sendData, (err, message) => {
    console.log(err || message)
    if (err) {
      res.status(500).json({ code: 1, message: '发送失败', error_message: err.message })
    } else {
      res.status(200).json({ code: 0, message: '发送成功' })
    }
  })
}

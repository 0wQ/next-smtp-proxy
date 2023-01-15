import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs'

type ResData = {
  code: number
  message: string
  error_message?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  const { user, password, host, port, form_name, to_email, subject, text } = req.body

  if (!user || !password || !host || !port || !to_email || !text) {
    res.status(400).json({ code: 1, message: '缺少参数' })
    return
  }

  // https://github.com/eleith/emailjs#new-smtpclientoptions
  const smtpConfig = {
    user,
    password,
    host,
    tls: {
      ciphers: 'SSLv3',
    },
    port: port,
    timeout: 9500,
  }

  const client = new SMTPClient(smtpConfig)

  const sendData = {
    from: `${form_name || ''}<${smtpConfig.user}>`,
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

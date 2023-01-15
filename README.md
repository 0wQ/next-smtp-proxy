## 部署方式

### Vercel (推荐)

> Vercel 分配的域名在中国大陆无法访问, 需使用自定义域名, 并修改 CNAME 记录为 `cname-china.vercel-dns.com.`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F0wQ%2Fnext-smtp-proxy)

### 本地运行

```bash
npm i
npm run build
npm run start
# or
pnpm i
pnpm run build
pnpm run start
```

## API

```http
POST https://example.com/api
Content-Type: application/x-www-form-urlencoded

user=test@outlook.com
&password=这里是密码
&host=smtp-mail.outlook.com
&port=587
&form_name=这里是收件人名称
&to_email=test@outlook.com
&subject=这里是主题
&text=这里是内容
```

```http
POST https://example.com/api
content-type: application/json

{
  "user": "test@outlook.com",
  "password": "这里是密码",
  "host": "smtp-mail.outlook.com",
  "port": 587,
  "form_name": "这里是收件人名称",
  "to_email": "test@outlook.com",
  "subject": "这里是主题",
  "text": "这里是内容"
}
```

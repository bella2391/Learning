const baseurl: string = process.env.NODE_ENV === 'production'
    ? process.env.PROXY_REVERSE_PASS || '/dev'
    : '';

export default baseurl;
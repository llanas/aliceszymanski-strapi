module.exports = ({ env }) => ({
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            serviceAccount: {
                type: "service_account",
                project_id: "llanas-web",
                private_key_id: "a4faac9891ca5615781579a409257eec7516b125",
                private_key: env("GCS_PRIVATE_KEY").replace(/\\n/g, '\n'),
                client_email: "aliceszymanski-uploads@llanas-web.iam.gserviceaccount.com",
                client_id: "104895036133825644084",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/aliceszymanski-uploads%40llanas-web.iam.gserviceaccount.com"
            },
            bucketName: env("GCS_BUCKET_NAME"),
            baseUrl: "https://storage.googleapis.com/" + env("GCS_BUCKET_NAME"),
            basePath: "/",
            publicFiles: true
        },
    }
});
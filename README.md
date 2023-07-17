-- Mise en place du site en ligne --

<< Procédure de déploiement  sur Netlify >>

    --Frontend--
    1 - Creation d'un compte sur la plateforme
    2 - Appairage du compte Github
    3 - Dans le menu "Team overview" ajout d'un nouveau site via un repo Github

    --CMS Headless--
    1 - Creation d'un environnement sur Railway.app pour deployer le CMS directus en self hosted.
        - J'ai utilisé une fonctionnalité de la plateforme pour créer un environnement.
            -> New project -> Directus API

        - L'environnement va automatiquement créer un repo sur GitHub: 
            https://github.com/Kiatolao/cms-directus

![Railway env](https://charles-cantin.s3.eu-west-3.amazonaws.com/image/railway.png)

        - Ensuite j'ai configuré les variables des l'environnement du dépo dans railway pour le connecter à un serveur AWS que j'ai créé au préalable.

            STORAGE_LOCATIONS=s3
            STORAGE_S3_DRIVER=s3
            STORAGE_S3_KEY=A***4
            STORAGE_S3_SECRET=E***5
            STORAGE_S3_REGION=eu-west-3
            STORAGE_S3_BUCKET=c***n
            STORAGE_S3_ENDPOINT=s3.***com
    
    2 - Creation d'un bucket AWS
        -J'ai créé un bucket public et configuré les "Buckets policies" pour definer les permissions

            "s3:DeleteObject",
            "s3:GetObject",
            "s3:PutObject"

<< Charte Graphique >>
    --Palette de couleur --

![Railway env](https://charles-cantin.s3.eu-west-3.amazonaws.com/image/palette.png)   

    --Police d'écriture--

![Railway env](https://charles-cantin.s3.eu-west-3.amazonaws.com/image/police.png)   

    --Wireframe/Mockup--

![Railway env](https://charles-cantin.s3.eu-west-3.amazonaws.com/image/figma.png)   

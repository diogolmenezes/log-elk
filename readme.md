Esse projeto é um teste de integração de log com o ELK, elastic search, logstash e kibana.

Ao acessar / o site grava um log dentro do arquivo log-elk.log.

Após instalado e configurado, o filebeat joga esse log para o elastisearch que esta rodando na imagem elk no docker
e é possivel visualizar os dados do log pela interface do kibana pela porta 5601.

Essa imagem expoe as portas 9200 do elastic search, 5601 do kibana, 5044 para o filebeat e a porta 5000 para o 
lumberjack. ( ver documentacao ELK )

# ELK

    ## Imagem 
        
        https://hub.docker.com/r/sebp/elk/

    ## Documentação
        
        http://elk-docker.readthedocs.io/#usage
        https://github.com/spujadas/elk-docker

    ## Subindo a imagem com volume externo
        
        `sudo docker run -p 5601:5601 -p 9200:9200  -p 5044:5044 -p 5000:5000 -v elk-data:/var/lib/elasticsearch --name elk sebp/elk`

   ## Prefixo para indice do kibana
        
        filebeat*


# FileBeat

    ## Instalação

        Na maquina da aplicação instalar o fileBeat que vai ser responsavel por mandar os logs para o logstash ou diretamente para o elastic search

        curl -L -O https://download.elastic.co/beats/filebeat/filebeat-1.3.1-x86_64.rpm
        sudo rpm -vi filebeat-1.3.1-x86_64.rpm

    ## Arquivo de configuração

        /etc/filebeat/filebeat.yml

    ## Testar configuração
        
        `$ ./filebeat -configtest -e`

    ## Iniciando o filebeat
        
        sudo /etc/init.d/filebeat start

    ## Documentação
        
        https://www.elastic.co/products/beats/filebeat
        https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html
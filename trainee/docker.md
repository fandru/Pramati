##  DOCKER:

#### What is Docker

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

#### How to install docker :

   * uninstall if old version of docker is installed using this command:

$ sudo apt-get remove docker docker-engine docker.io

##### step1:
Install docker using the following command-

$ sudo apt-get -y install docker-ce

##### Step2:
Start the docker service in the installed machine

$ sudo systemctl start docker.service
$ sudo systemctl enable docker.service

##### Step3:
Check the status of installation by 

$ sudo docker run hello-world
$ sudo docker --version


##### NOTE:
by default docker requires root privilege to run docker commands  like using sudo  before every commands.

##### To give root access to non-root users to run docker:
1.  sudo groupadd docker
2.  sudo  useradd  $USER
3. sudo  usermod -aG   docker $USER


Now we are able to run docker command without prefix sudo.


##### docker commands:


docker -v                  : gives  docker version

docker images -a     : list all images with tag name.

docker  ps                : list all containers  in machine.





##### Installing Postgresql  in docker:


##### step1:  
pull  postgres image from docker(hub.docker.com).

$ docker pull  postgres.

##### Step2: 

now we can see what are all the images present in our system by  using   
‘ docker images’ 
we able to see postgres image ,to use postgres  create postgres instance  by

$ docker run  --name  container_name   -d Image-name

eg: docker run –name   postgres_container1  -d postgres.

##### Step3:

$ docker ps  : list the containers list and we can able to see our postgres_container1 .

##### Step4:
 
$ docker exec -it container_name      bash
psql -U Imagename


##### sql command:


create table resume_collect( id SERIAL primary key , filename varchar  not null , email varchar not null ,phone varchar not null ,yop varchar not null);













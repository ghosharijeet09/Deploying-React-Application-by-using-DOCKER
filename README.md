**Title:** Understanding Virtualization by installing Virtual Box and creating VM(Linux) for a React Application
 
 **Objective:**
 The objective of this task is to understand the concept of virtualization by
 installing VirtualBox and creating a Virtual Machine (VM) with a Linux operating
 system. The VM will then be used to host and deploy a React application, providing
 hands-on experience with setting up and managing virtual environments for
 software development and deployment.
 Prerequisites:
 ● Basic understanding of virtualization.
 ● Familiarity with Linux command line.
 ● Knowledge of React application development.
 
 **Theory:**
 Virtualization allows multiple operating systems to run on a single physical machine
 by creating virtual versions of resources like servers. A Virtual Machine (VM) is a
 software emulation of a computer, running an OS and applications in isolation.
 Oracle VM VirtualBox is a type 2 hypervisor that manages VMs. In this
 experiment, a Linux VM will be set up to host a React application. React is a
 JavaScript library for building dynamic user interfaces. Networking within the VM
 enables internet access and hosting the React app.
 Materials and Equipment:
 ● VMVirtualBox
 ● Linux ISO image (e.g., Ubuntu)
 ● Node.js and npm
 ● React application code

**Procedure:**
1. Install VirtualBox :
 ● Haveinstalled VirtualBox from the official website.
 ● Follow the installation prompts to set up VirtualBox on your host machine.
> > ![image](https://github.com/user-attachments/assets/21b3c1df-73bb-40c9-a7fd-29e94d0d3e03)

2. Download Linux ISO :
 Choose a Linux distribution (e.g., Ubuntu) and download the ISO image from the
 official website.
> > ![image](https://github.com/user-attachments/assets/d5fc453b-57e4-48d0-a684-ddaa7e528c3c)

3. Create a New VM:
 ● OpenVirtualBox and click on "New."
 ● NametheVM, select "Linux" as the type, and choose the appropriate version
 (e.g., Ubuntu 64 bit).
 ● Allocate memory (at least 2GB) and create a virtual hard disk (20GB or
 more).
> > ![image](https://github.com/user-attachments/assets/07e623ee-e885-4286-b346-8baf7cc47161)
> > ![image](https://github.com/user-attachments/assets/5996b8fe-5f8a-42ff-9ff7-0145d697ae60)
> > ![image](https://github.com/user-attachments/assets/0187cb82-4036-49ad-9f5c-7580e8545f03)
> > ![image](https://github.com/user-attachments/assets/21ef5d9b-7d7f-4d5d-8689-dd7dc00b1eb8)
> > ![image](https://github.com/user-attachments/assets/6a25af71-d8b3-41b2-8524-4e0d3520fecc)

4. Set Up Linux Environment :
 ● OnceLinux is installed, boot into the VM.
 ● Update the package manager (`sudo apt update`) and install any necessary
 updates (`sudo apt upgrade`).
> > ![image](https://github.com/user-attachments/assets/ad7282d5-bd00-495b-b399-41dd1cae8c09)

5. Install Node.js and npm :
 ● IntheLinux terminal, install Node.js and npm by running the following
 commands:
 bash
 sudo apt install nodejs
 sudo apt install npm
 ● Verifythe installation with `node v` and `npm v`.
> > ![image](https://github.com/user-attachments/assets/6e24f8e7-ec68-47ee-a5dc-9ea4a6365907)

6. .Navigate to the project directory in the terminal

7. After installing all the docker containers and other dependencies , change the
 mongo version to 4.4 using any editor and save the changes. ( in case any error is
 encountered due to CPU limitations)
> > ![image](https://github.com/user-attachments/assets/747748f1-5fbd-4361-ad79-3c6628862b85)

8. Start the docker container--> first up the compose file in the place where the compose file is present using
 the command- sudo docker compose up-d--build--> navigate to client folder >> npm i >> npm run dev
> > ![image](https://github.com/user-attachments/assets/a6491aee-8a31-445a-9f21-6764ffc6ae64)

9. Follow the same steps for the server folder also
 →Navigate to server folder and follow the same steps--> first up the compose file in the place where the compose file is present using
 the command- sudo docker compose up-d--build--> navigate to server folder >> npm i >> npm run dev
> > ![image](https://github.com/user-attachments/assets/c0d62696-c447-402e-97db-6f75b3e1dcce)

10. Open the application in your browser at the address
> > ![image](https://github.com/user-attachments/assets/55d33d39-0675-4f99-b70f-655067a52900)

11. Enable port forwarding in advanced settings in the VM to open the app in the
 host machine.
> > ![image](https://github.com/user-attachments/assets/7dc18f85-199d-4f8d-b52e-77f3a5b341f7)

> > ![image](https://github.com/user-attachments/assets/807e4fe2-68e2-4937-9403-754e4249ca11)

**Observations:**
 It is seen that VirtualBox and Linux VM are set up, Node.js and npm work, the
 application runs, and the app is accessible from the browser and host machine,
 confirming proper networking and port forwarding.
 
**Result:**
 Virtualization was understood by installing Virtual Box and running a React Application

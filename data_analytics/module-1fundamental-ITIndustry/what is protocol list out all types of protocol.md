# What Is a Protocol?

A protocol is a set of rules that defines how devices, applications, and systems communicate. It specifies how data is formatted, addressed, transmitted, received, checked, and understood.

For example, when a browser opens a website, several protocols work together. DNS finds the website's address, TCP or QUIC manages the connection, TLS encrypts the communication, and HTTP transfers the web page.

## Why Protocols Are Important

Protocols make communication reliable and predictable. They help systems to:

1. Identify the sender and receiver.
2. Format messages in a common way.
3. Send data to the correct destination.
4. Detect errors and recover from lost data.
5. Control the speed of communication.
6. Authenticate users and protect information.
7. Allow products from different companies to work together.

## Common Protocol Terms

- **Client:** A device or application that requests data or a service.
- **Server:** A device or application that provides data or a service.
- **Packet:** A small unit of data sent across a network.
- **Address:** Information used to identify a destination, such as an IP address or port.
- **Port:** A logical number used to direct traffic to a particular service.
- **Payload:** The useful data carried by a packet.
- **Header:** Control information added to a message, such as source, destination, and sequence information.
- **Authentication:** Verifying the identity of a user or system.
- **Encryption:** Converting readable information into protected information.
- **Acknowledgment:** A message confirming that data was received.

## Protocols by Networking Layer

Protocols are often organized using the OSI model or the TCP/IP model. A single communication normally uses several layers together.

### 1. Physical Layer Protocols

These define how raw bits travel through a physical medium such as cable, fiber, or radio waves.

- **Ethernet physical standards:** Define electrical or optical signaling over wired networks.
- **Wi-Fi physical standards:** Define radio communication between wireless devices.
- **Bluetooth:** Defines short-range wireless communication between nearby devices.
- **USB:** Defines wired communication between computers and peripherals.
- **DSL:** Carries internet communication over telephone lines.

### 2. Data Link Layer Protocols

These protocols manage communication between devices on the same local network. They use hardware or MAC addresses and frames.

- **Ethernet:** The most common wired LAN technology.
- **Wi-Fi or IEEE 802.11:** Wireless LAN communication.
- **PPP (Point-to-Point Protocol):** Transfers data across a direct connection.
- **HDLC (High-Level Data Link Control):** Provides frame-based communication over point-to-point links.
- **ARP (Address Resolution Protocol):** Finds a device's MAC address from its IPv4 address on a local network.
- **NDP (Neighbor Discovery Protocol):** Performs related address discovery functions for IPv6.
- **STP (Spanning Tree Protocol):** Prevents loops in switched Ethernet networks.
- **VLAN protocols:** Separate one physical network into logical networks.

### 3. Network or Internet Layer Protocols

These protocols provide logical addressing and route packets between different networks.

- **IPv4:** Uses 32-bit internet addresses, such as `192.168.1.10`.
- **IPv6:** Uses 128-bit internet addresses and supports a much larger address space.
- **ICMP:** Sends network control and error messages. The `ping` utility commonly uses ICMP.
- **ICMPv6:** The IPv6 version of ICMP, also used by IPv6 neighbor discovery.
- **IPsec:** Protects IP communication using authentication and encryption.
- **OSPF:** Shares routing information inside an organization or autonomous system.
- **RIP:** Uses hop count to select routes; it is simple but limited.
- **EIGRP:** A routing protocol traditionally associated with Cisco networks.
- **BGP:** Exchanges routing information between autonomous systems on the internet.

### 4. Transport Layer Protocols

These manage communication between applications running on different devices.

- **TCP (Transmission Control Protocol):** Connection-oriented and reliable. It checks delivery, preserves order, and retransmits lost data.
- **UDP (User Datagram Protocol):** Fast and lightweight, but it does not guarantee delivery or ordering.
- **QUIC:** A modern encrypted transport protocol built over UDP. HTTP/3 uses QUIC.
- **SCTP:** Supports message-oriented communication and multiple streams in one connection.

## Application Layer Protocols

Application protocols define how user-facing services exchange messages.

### 1. Web and Internet Browsing Protocols

- **HTTP:** Transfers web pages, APIs, images, and other web resources.
- **HTTPS:** HTTP protected by TLS encryption.
- **HTTP/2:** Improves web performance using multiplexing and header compression.
- **HTTP/3:** Uses HTTP over QUIC for modern web communication.
- **DNS:** Converts domain names such as `example.com` into IP addresses.
- **DoH (DNS over HTTPS):** Sends DNS queries through HTTPS.
- **DoT (DNS over TLS):** Encrypts DNS queries with TLS.

### 2. File Transfer Protocols

- **FTP:** Transfers files between a client and server, but standard FTP is not encrypted.
- **FTPS:** FTP protected with TLS.
- **SFTP:** Secure file transfer over an SSH connection. It is different from FTPS.
- **TFTP:** A simple file transfer protocol often used for network devices; it has few security features.
- **SCP:** Copies files securely through SSH.
- **WebDAV:** Extends HTTP to create, edit, and manage files on a remote server.

### 3. Email Protocols

- **SMTP:** Sends email from a client to a mail server or between mail servers.
- **POP3:** Downloads email from a server, often storing messages mainly on one device.
- **IMAP:** Synchronizes email and folders between a server and multiple devices.
- **MIME:** Allows email to carry attachments and different content types.

### 4. Remote Access and Administration Protocols

- **SSH:** Provides secure remote login, command execution, and tunneling.
- **Telnet:** Provides remote terminal access without built-in encryption; it should not be used for sensitive communication.
- **RDP:** Provides graphical remote access to Windows computers.
- **VNC:** Provides remote graphical desktop access across different systems.
- **SNMP:** Monitors and manages network devices.
- **NTP:** Synchronizes the clocks of computers over a network.

### 5. Directory, Identity, and Authentication Protocols

- **LDAP:** Accesses and manages directory information such as users and groups.
- **Kerberos:** Provides ticket-based authentication in trusted networks.
- **RADIUS:** Provides centralized authentication, authorization, and accounting for network access.
- **OAuth 2.0:** Allows an application to access limited resources on behalf of a user without receiving the user's password.
- **OpenID Connect:** Adds identity authentication on top of OAuth 2.0.
- **SAML:** Exchanges authentication and authorization information, commonly for enterprise single sign-on.

### 6. Security and Cryptography Protocols

- **TLS:** Encrypts data in transit and verifies the identity of a server.
- **SSL:** An older predecessor to TLS and no longer considered secure for modern use.
- **IPsec:** Secures IP packets and is commonly used in virtual private networks.
- **SSH:** Secures remote administration and can also create encrypted tunnels.
- **WPA2 and WPA3:** Protect Wi-Fi networks. WPA3 is the newer standard.
- **OpenVPN and WireGuard:** VPN technologies used to create encrypted network connections.

### 7. Messaging and Real-Time Communication Protocols

- **WebSocket:** Provides two-way, persistent communication between a browser and server.
- **SIP:** Initiates, manages, and ends voice or video communication sessions.
- **RTP:** Transports real-time audio and video.
- **RTSP:** Controls streaming media sessions.
- **IRC:** Supports real-time text chat.
- **XMPP:** Supports near-real-time messaging and presence information.

### 8. IoT and Machine-to-Machine Protocols

- **MQTT:** A lightweight publish-and-subscribe protocol for devices with limited resources.
- **CoAP:** A lightweight web-style protocol for constrained devices.
- **AMQP:** Reliable message queuing used in enterprise systems.
- **DDS:** Real-time data exchange for distributed systems.
- **Zigbee:** Low-power wireless communication for home and industrial devices.
- **Z-Wave:** Low-power wireless communication used mainly in home automation.
- **LoRaWAN:** Long-range, low-power communication for IoT devices.

### 9. Database and Data Exchange Protocols

- **ODBC:** A standard interface for connecting applications to databases.
- **JDBC:** A Java interface for connecting applications to databases.
- **TDS:** A protocol used by some database products, including SQL Server connections.
- **REST:** An architectural style commonly used to design HTTP APIs around resources.
- **SOAP:** An XML-based messaging protocol used in many enterprise web services.
- **GraphQL:** An API query language and runtime that lets a client request specific fields.
- **JSON-RPC:** Sends remote procedure calls using JSON.
- **XML-RPC:** Sends remote procedure calls using XML.

### 10. Network Management and Monitoring Protocols

- **SNMP:** Collects status and performance information from network devices.
- **Syslog:** Sends system and security event messages to a central logging system.
- **NetFlow and IPFIX:** Export information about network traffic flows.
- **ICMP:** Helps diagnose reachability and network errors.
- **NTP:** Keeps device timestamps consistent for logs and distributed operations.

## Connection-Oriented and Connectionless Protocols

### Connection-Oriented Protocols

A connection is established before the main data transfer. The protocol can track delivery and order. TCP is a common example.

### Connectionless Protocols

Data is sent without first establishing a dedicated connection. This reduces overhead and can improve speed, but delivery may not be guaranteed. UDP is a common example.

## Reliable and Unreliable Protocols

- **Reliable protocols:** Confirm delivery, preserve order, and retransmit missing data. TCP is an example.
- **Unreliable protocols:** Do not guarantee delivery or order. UDP is an example, although applications can add their own reliability when needed.

The word *unreliable* does not mean useless. Live voice, video, gaming, and DNS often prefer low delay over retransmitting every lost packet.

## Stateless and Stateful Protocols

- **Stateless protocol:** Each request contains the information needed to process it. HTTP is generally stateless.
- **Stateful protocol:** The server or connection remembers information across messages. Some login sessions and database connections are stateful.

Stateless designs are often easier to scale, while stateful designs can support richer ongoing interactions.

## Example: What Happens When a User Opens a Website?

1. The browser asks DNS to resolve the domain name.
2. The device uses IP to address packets to the destination.
3. TCP or QUIC establishes transport communication.
4. TLS encrypts the connection when HTTPS is used.
5. HTTP requests the page, images, stylesheets, and scripts.
6. Ethernet or Wi-Fi sends the frames over the local network.
7. The server returns responses, and the browser displays the website.

## Protocols in Data Analytics

Protocols are important in data analytics because analysts often collect data from many systems. They help analysts to:

- download files through HTTPS, SFTP, or an API;
- connect Python, Excel, or BI tools to databases through ODBC or JDBC;
- collect live data from web services using HTTP and JSON;
- receive device data through MQTT or other IoT protocols;
- monitor pipelines using timestamps, logs, and network status messages;
- protect customer, financial, and business data during transfer.

Before using data from a protocol-based source, check authentication, authorization, encryption, rate limits, data format, privacy requirements, and the source's terms of use.

## Protocol Best Practices

1. Use encrypted protocols such as HTTPS, SFTP, SSH, or TLS for sensitive data.
2. Avoid Telnet, plain FTP, and other unencrypted protocols for confidential information.
3. Use strong authentication and rotate credentials regularly.
4. Validate incoming data before storing or processing it.
5. Apply least-privilege access to APIs, databases, and network devices.
6. Keep protocol implementations and operating systems updated.
7. Monitor logs for failed authentication, unusual traffic, and data-transfer errors.
8. Use time synchronization so events can be compared accurately across systems.
9. Document ports, endpoints, message formats, and error-handling rules.
10. Follow privacy laws and organizational security policies when transferring personal data.

## Protocol in One Sentence

A protocol is a shared set of communication rules that enables systems to exchange data in a predictable, reliable, and secure way.

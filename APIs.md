
# APIs 
***
#### AUTH 

###### Login app
> POST api/v1/auth/login

Request 
```
{
  login: String
  password: String
}
```

Response
>Status code: 200

```
{
  success: Boolean
}
```

***
#### CLIENTS
###### Get clients
>GET api/v1/clients/?limit=10

Response 
>Status code: 200

```
[
  {
    id: Integer
    fullname: String
    address: String 
    email:  String
    phone_number: String
    group: String
  }
]
```


###### Add client
>POST api/v1/clients/create

Request
```
{
  id: Integer
  fullname: String
  address: String 
  email:  String
  phone_number: String
  group: String
}
```

Response 
>Status code: 200

```
{
  success: Boolean
}
```

###### Delete client
DEL api/v1/clients/?id=Integer

Response 
>Status code: 200

```
{
  success: Boolean
}
```

###### Change client
POST api/v1/clients/update/?id=Integer
Request
```
{
  fullname: String
  address: String 
  email:  String
  phone_number: String
  group: String
}
```

Response (if changed) 
>Status code: 200

```
{
  id: Integer
  fullname: String
  address: String 
  email:  String
  phone_number: String
  group: String
}
```

Response (if did't change)
>Status code: 204

***
#### Groups
###### Get groups
GET api/v1/groups/?limit=15

Response
>Status code: 200

```
[
  {
    id: Integer
    name: String
  }
]
```

###### Add group
POST api/v1/groups/create

Request
```
{
  name: String
}
```

Response 
>Status code: 200

```
{
  success: Boolean
}
```

###### Delete group
DEL api/v1/groups/?id=Integer

Response 
>Status code: 200

```
{
  success: Boolean
}
```

###### Change group
> POST api/v1/groups/update/?id=Integer
Request
>Status code: 200

```
{
  name: String
}
```

Response (if changed)
>Status code: 200 

```
{
  name: String
}
```

Response (if did't change)
>Status code: 204

***
#### Employees
###### Get employees
> GET api/v1/employees/?limit=10

Response 
>Status code: 200 

```
[
  {
     id: Integer
     name: String
     login: String 
  }
]
```


###### Add employee
> POST api/v1/employees/create

Request
```
{
  name: String
  login: String
  password: String
}
```

Response 
>Status code: 200 

```
{
  success: Boolean
}
```

###### Delete employee
>DEL api/v1/employees/?id=Integer

Response 
>Status code: 200 

```
{
  success: Boolean
}
```

###### Change employee
POST api/v1/employees/update/?id=Integer
Request
```
{
  name: String
  login: String 
  password:  String
}
```

Response (if changed)
>Status code: 200 
```
{
  id: Integer
  name: String
  login: String
}
```

Response (if did't change)
>Status code: 204

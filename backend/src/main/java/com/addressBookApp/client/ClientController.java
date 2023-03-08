package com.addressBookApp.client;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/clients")
public class ClientController {

    @GetMapping
    public List<Client> getClient() {
        return List.of(
                new Client(
                    1,
                    "Ivanov Ivan",
                    "Batumi",
                    "ivanov@gmail.com",
                    "88005533535",
                    "test-group 1"
                )
        );
    }
}

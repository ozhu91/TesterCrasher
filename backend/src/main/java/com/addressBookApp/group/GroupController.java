package com.addressBookApp.group;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/groups")
public class GroupController {

    @GetMapping
    public List<Group> getGroup() {
        return List.of(
                new Group(
                        1,
                        "test-group 1"
                )
        );
    }
}

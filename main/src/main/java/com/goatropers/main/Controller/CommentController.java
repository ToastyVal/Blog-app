package com.goatropers.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goatropers.main.model.Comment;
import com.goatropers.main.repository.CommentRepository;
import com.goatropers.main.service.CommentService;

@RestController
@RequestMapping("/blog")
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    CommentRepository dao;

    @PostMapping("/addComment")
    public String add(@RequestBody Comment comment) {
        commentService.saveComment(comment);
        return "New Comment has been made";
    }

    @GetMapping("/getAll")
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    @DeleteMapping("/deleteComment/{id}")
    public ResponseEntity<Comment> deleteComment(@PathVariable(value = "id") Integer id) {
        Comment foundComment = dao.findById(id).orElse(null);
        if (foundComment == null) {
            return ResponseEntity.notFound().header("Comment", "Nothing found with that id").build();
        } else {
            dao.delete(foundComment);
        }
        return ResponseEntity.ok().build();
    }
}

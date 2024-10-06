package entity;

import java.io.Serializable;
import java.util.Date;
import javax.annotation.processing.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.Columns;

@Entity
@Table(name = "chat")
public class Chat implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "from_user_id")
    private User from_User;

    @ManyToOne
    @JoinColumn(name = "to_user_id")
    private User to_User;

    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "date_time", nullable = false)
    private Date date_time;

    @ManyToOne
    @JoinColumn(name = "chat_status_id")
    private Chat_Status chat_status;

    public Chat() {

    }

    public int getId() {
        return id;
    }

    public User getFrom_User() {
        return from_User;
    }

    public User getTo_User() {
        return to_User;
    }

    public String getMessage() {
        return message;
    }

    public Date getDate_time() {
        return date_time;
    }

    public Chat_Status getChat_status() {
        return chat_status;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFrom_User(User from_User) {
        this.from_User = from_User;
    }

    public void setTo_User(User to_User) {
        this.to_User = to_User;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setDate_time(Date date_time) {
        this.date_time = date_time;
    }

    public void setChat_status(Chat_Status chat_status) {
        this.chat_status = chat_status;
    }

}

package project.cookdoc.model;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("payloadList")
public class PayloadList<E> extends ArrayList<E>{

    private static final long serialVersionUID = 1L;

    public PayloadList() {
        super();
    }

    @SuppressWarnings("unchecked")
    public PayloadList(List<?> list) {
        if (list != null) {
            Iterator<?> it = list.iterator();
            while (it.hasNext()) {
                this.add((E) it.next());
            }
        }
    }

    public void set(E obj) {
        super.add(obj);
    }

    public void set(E[] objs) {
        for (E obj : objs) {
            super.add(obj);
        }
    }
}
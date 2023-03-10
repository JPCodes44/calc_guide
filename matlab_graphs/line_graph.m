y = 2;
yline(y,'Color','r','LineWidth',2)
xlim([-6 6])
ylim([0 2.2])
title("JPS Vector Function")

hold on;

for i = -5:5
    plot(i,y,'.','Color','black','MarkerSize',25)
    line([0 i],[0 2],'Color',[.7 .7 .7],'LineStyle','--','LineWidth',1.5)
    text(i-0.3,y+0.05,strcat('t=',int2str(i)))
end

set(gca, 'XAxisLocation', 'origin', 'YAxisLocation', 'origin')
set(gca,'xtick',-5:5)
set(gca,'ytick',0:1)
xlabel('x')
ylabel('y')
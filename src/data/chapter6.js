/**
 * Created by jianghai on 2018/10/20.
 */

const questions = [
  {
    id: '1',
    title: '按需进度计划的理论是依据于',
    options: {
      A: '约束理论',
      B: '看板体系',
      C: '用户故事',
      D: '瀑布流程',
    },
  },
  {
    id: '2',
    title: '项目经理正在和团队一起制定项目进度管理计划，团队需要提出了本过程可能需要的工具和技术，哪个是错误的',
    options: {
      A: '专家判断',
      B: '备选方案分析',
      C: '会议',
      D: '项目管理信息系统',
    },
  },
  {
    id: '3',
    title: '项目进度管理计划规定了',
    options: {
      A: '必须是详细和正式的',
      B: '必须是项目管理计划的组成部分，不能独立成册',
      C: '需要明确为编制、监督和控制项目进度建立准则和明确活动',
      D: '需要包括活动清单和活动属性',
    },
  },
  {
    id: '4',
    title: '“分解”技术适用于以下哪个(些)过程',
    options: {
      A: '规划进度管理和规划范围管理',
      B: '创建WBS和定义活动',
      C: '确认范围和控制进度',
      D: '定义范围和创建WBS',
    },
  },
  {
    id: '5',
    title: '项目经理和团队定义完活动，应该获得',
    options: {
      A: '活动顺序',
      B: '活动时间',
      C: '活动属性',
      D: '活动名称',
    },
  },
  {
    id: '6',
    title: '项目管理团队正在对活动时间如何排列关系进行讨论，两个活动的描述是:代码编写可以在单元测试开始前5天开始，这是',
    options: {
      A: 'FS+5',
      B: 'FS-5',
      C: 'SS+5',
      D: 'SS-5',
    },
  },
  {
    id: '7',
    title: '在排列活动顺序的过程中，项目经理和团队可能需要考虑以下事业环境因素，哪个是错误的',
    options: {
      A: '政府或行业标准',
      B: '项目组合与项目集规划',
      C: '进度规划工具',
      D: '项目管理信息系统',
    },
  },
  {
    id: '8',
    title: '项目团队必须把原型创建出来才能对其进行测试，这是一个',
    options: {
      A: '强制性依赖关系',
      B: '选择性依赖关系',
      C: '外部依赖关系',
      D: '内部依赖关系',
    },
  },
  {
    id: '9',
    title: '在房屋建造过程中，应该先完成卫生管道工程，才能进行电气工程施工，这是一个',
    options: {
      A: '强制性依赖关系',
      B: '选择性依赖关系',
      C: '外部依赖关系',
      D: '内部依赖关系',
    },
  },
  {
    id: '10',
    title: '排列活动顺序常见的工具与技术不包括',
    options: {
      A: '提前量与滞后量',
      B: '项目管理信息系统',
      C: '确定和整合依赖关系',
      D: '人际关系与团队技能',
    },
  },
  {
    id: '11',
    title: 'PMO希望你能够向相关方介绍一下项目进度网络图，你认为哪个说法更能体现项目进度网络图的意义',
    options: {
      A: '项目进度网络图就是项目进度计划',
      B: '项目进度网络图通常用于向管理层汇报项目进展情况',
      C: '项目进度网络图用于表示活动之间的逻辑关系',
      D: '甘特图是最简单的项目进度网络图',
    },
  },
  {
    id: '12',
    title: '关于里程碑，以下说法都正确，除了',
    options: {
      A: '里程碑是一种特殊的活动',
      B: '里程碑是项目中的重要时点或事件',
      C: '里程碑的设置是强制性的',
      D: '里程碑的持续时间为零',
    },
  },
  {
    id: '13',
    title: '高级管理层任命你为项目经理，负责公司最新启动的ERP部署项目，在启动阶段，高级管理层希望你能够快速，但不需要太准确的估算工期，你应该采用哪种估算技术',
    options: {
      A: '类比估算',
      B: '自下而上估算',
      C: '三点估算',
      D: '无法估算',
    },
  },
  {
    id: '14',
    title: '在估算活动持续时间的过程中，以下哪个原理可能是错误的',
    options: {
      A: '在估算活动持续时间的过程中，如果参与估算的人员数量持续增多，估算的准确性可能反而下降',
      B: '如果一个人员在8小时内完成1000行代码的撰写，则增加至两个人员时，可以在4小时完成1000行代码',
      C: '对于一个人工无法估算的活动，采用新技术，则可能达到更好的效果',
      D: '项目团队成员可能会有这样的心态，即不到最后一个刻，绝不会全力以赴',
    },
  },
  {
    id: '15',
    title: '如果所用的资源每月能够完成10个客户订单，那么100个客户订单则可能需要10个月，这是一个',
    options: {
      A: '专家判断的例子',
      B: '自下而上的例子',
      C: '参数估算的例子',
      D: '三点估算的例子',
    },
  },
  {
    id: '16',
    title: '三点估算没有考虑哪个数值',
    options: {
      A: '最乐观时间',
      B: '最悲观时间',
      C: '最可能时间',
      D: '最平均时间',
    },
  },
  {
    id: '17',
    title: '完成活动A所需的时间经过估算如下:乐观估算时间=8天;悲观估算时间=38天;最可能估算时间=20天;按照三点估算方法进行估算，26天以后完成的概率大概是',
    options: {
      A: '8.9%',
      B: '15.9%',
      C: '22.2%',
      D: '28.6%',
    },
  },
  {
    id: '18',
    title: '项目经理工作开展的一半的时候，发现了一个之前完全没有预估到的风险，需要延长项目的工期，用考虑使用',
    options: {
      A: '应急储备时间',
      B: '管理储备时间',
      C: '让客户接受延误时间',
      D: '告诉客户，进度延误',
    },
  },
  {
    id: '19',
    title: '估算活动持续时间，项目经理向专家请教，应该让哪些人参与活动持续时间的估算，专家告诉项目经理',
    options: {
      A: '项目经理自己估算',
      B: '由负责具体活动的成员估算',
      C: '有PMO给出估算数值',
      D: '由客户估算',
    },
  },
  {
    id: '20',
    title: '项目经理就某个活动的估算时间征求团队成员的意见，其中有两位成员分别伸出了一根手指和两根手指，这表明',
    options: {
      A: '需要与他们继续讨论',
      B: '他们都同意意见',
      C: '一根手指表示完全支持',
      D: '两根手指表示不支持',
    },
  },
  {
    id: '21',
    title: '敏捷项目中估算活动持续时间，说法正确的是',
    options: {
      A: '敏捷项目没有估算活动持续时间',
      B: '敏捷项目在产品未完项中估算活动持续时间',
      C: '敏捷项目在用户故事中估算活动持续时间',
      D: '敏捷项目在用户故事分解的任务中估算活动持续时间',
    },
  },
  {
    id: '22',
    title: '活动持续时间估算完成后，可以获得',
    options: {
      A: '持续时间估算',
      B: '进度基准',
      C: '项目日历',
      D: '变更请求',
    },
  },
  {
    id: '23',
    title: '项目团队正在通过“如果情境X出现，情况会怎么样”的技术来制定进度管理计划，这是一个',
    options: {
      A: '模拟分析',
      B: '假设情境分析',
      C: '关键路径法',
      D: '资源平衡',
    },
  },
  {
    id: '24',
    title: '以下都是制定进度计划过程的输入，除了',
    options: {
      A: '事业环境因素',
      B: '协议',
      C: '项目文件',
      D: '变更请求',
    },
  },
  {
    id: '25',
    title: '关于进度网络分析技术，说法正确的是',
    options: {
      A: '建模技术是一种进度网络分析技术',
      B: '进度网络分析一次性就可以达到目标',
      C: '资源优化技术不属于进度网络分析技术',
      D: '进度网络分析技术是定义活动的工具与技术',
    },
  },
  {
    id: '26',
    title: '关于关键路径，以下说法哪个错误',
    options: {
      A: '关键路径是项目中时间最长的活动顺序，决定着可能的项目最短工期',
      B: '关键路径总浮动时间可以是正值、负值或0',
      C: '关键路径的条数可能不止一条，条数越多，就更易于管理',
      D: '关键路径用来计算进度模型中逻辑网络路径的进度灵活性大小',
    },
  },
  {
    id: '27',
    title: '一条活动不在关键路径上，说明',
    options: {
      A: '这个活动不重要',
      B: '这个活动存在浮动时间',
      C: '这个活动一直不在关键路径上',
      D: '这个活动的持续时间太长',
    },
  },
  {
    id: '28',
    title: '一个项目有7个活动:A,B,C,D,E,F,和G。ABD可以在任何时候开始，A需要3周，B5周，D11周。AB结束后C才可以开始。C需要6周。BCD结束后E才能开始。E需要2周。F需要4周，需要在C完成之后才能开始。E完成之后G才能开始。G需要3周。FG完成之后项目才最终完成。那么',
    options: {
      A: '活动A有2周的浮动时间，F有1周的是浮动时间',
      B: '活动F有1周的浮动时间',
      C: '整个项目没有浮动时间',
      D: '活动A有8周的浮动时间',
    },
  },
  {
    id: '29',
    title: '一个项目包含7个活动，ABCDEFG,ABD可以在任何时候开始，A需要3周，B5周，D11周AB结束后C才可以开始，C需要6周，BCD结束后E才能开始，E需要2周，F需要4周，需要在C完成之后才能开始，E完成之后G才能开始，G需要3周，FG完成之后项目才最终完成，关键路径是',
    options: {
      A: '开始，A,C,F结束',
      B: '开始，B,C,E,G结束',
      C: '开始，D,E,G结束',
      D: '两条:开始B、C、E、G结束和开始D、E、G结束',
    },
  },
  {
    id: '30',
    title: '关于资源平衡和资源平滑，说法正确的是',
    options: {
      A: '资源平滑技术可能导致关键路径发生变化',
      B: '资源平衡技术可能导致关键路径发生变化',
      C: '资源平滑属于资源优化技术，而资源平衡属于关键路径技术',
      D: '资源平衡和资源平滑不适用于进度控制',
    },
  },
  {
    id: '31',
    title: '制定进度计划过程的工具和技术可以采用',
    options: {
      A: '决策',
      B: '蒙特卡洛',
      C: '引导',
      D: '谈判',
    },
  },
  {
    id: '32',
    title: '项目团队发现进度已经延误，PMO的建议是他们可以采取进度压缩技术来压缩工期，关于进度压缩，正确的说法是',
    options: {
      A: '进度压缩需要缩减项目范围',
      B: '进度压缩可以在非关键路径上开展',
      C: '相对而言，赶工的风险明显高于快速跟进',
      D: '批准加班是一个赶工的事例',
    },
  },
  {
    id: '33',
    title: '如果项目组有多余的资源可以投入到已经延误的项目当中，采用哪种技术进行进度压缩比较合适',
    options: {
      A: '赶工',
      B: '快速跟进',
      C: '以上都可以',
      D: '以上都不行',
    },
  },
  {
    id: '34',
    title: '在敏捷项目中，产品愿景将会驱动哪一个组件交付',
    options: {
      A: '产品路线图',
      B: '发布计划',
      C: '冲刺计划',
      D: '行动计划',
    },
  },
  {
    id: '35',
    title: '敏捷迭代计划中的“功能”通过什么来交付',
    options: {
      A: '故事点',
      B: '用户故事',
      C: '故事版',
      D: '任务',
    },
  },
  {
    id: '36',
    title: '为了便于控制，以及与管理层进行沟通，应该使用',
    options: {
      A: '甘特图',
      B: '里程碑图',
      C: '进度网络图',
      D: '资源视图',
    },
  },
  {
    id: '37',
    title: '以下都是制定进度计划过程的输出，除了',
    options: {
      A: '进度数据',
      B: '项目日历',
      C: '变更请求',
      D: '事业环境因素',
    },
  },
  {
    id: '38',
    title: '在控制进度过程中，关于迭代燃尽图，哪个是正确的',
    options: {
      A: '完成一次迭代后，实际剩余工作一定会减少',
      B: '用于追踪迭代未完项中尚待完成的工作',
      C: '理想剩余工作线始终在实际剩余工作线的下方',
      D: '迭代速度是一致的，但是每次迭代的工作量并不相同',
    },
  },
  {
    id: '39',
    title: '你负责一个复杂的产品开发项目，你公司过去从未做过同类项目。你的项目进度延误了。原计划团队成员应每天花4小时完成工作，用8周完成。现在需改为每天工作8小时，用4周完成，项目经理采用的是',
    options: {
      A: '资源平衡',
      B: '赶工',
      C: '快速跟进',
      D: '假设情景分析',
    },
  },
  {
    id: '40',
    title: '为了控制进度，项目经理重新分析项目，以使预测项目的历时。他按进度安排弹性最小的活动来排序，它采用的是什么技术',
    options: {
      A: '关键路径法',
      B: '紧前关系绘图法',
      C: '敏捷发布计划',
      D: '假设情景分析',
    },
  },
];

const answers = [
  {
    id: '1',
    correct: 'A',
    explanation: '参考PMBOK177，按需进度计划的理论来自制约和精益生产的拉动式进度计划。而其常用于看板体系，并不是来源于看板体系。',
  },
  {
    id: '2',
    correct: 'D',
    explanation: '参考PMBOK181，本过程没有项目管理信息系统，其中B选项属于数据分析的一种。',
  },
  {
    id: '3',
    correct: 'C',
    explanation: '参考PMBOK181，C是进度管理计划的完整描述，项目进度管理计划可以简单和非正式，也可以独立成册。所有知识领域的管理计划都可以独立成册。D属于定义活动的输出。本部分需要大家详细掌握项目进度管理计划都包括哪些元素。',
  },
  {
    id: '4',
    correct: 'B',
    explanation: '参考PMBOK185，分解是把项目范围和项目可交付成果逐步划分为更小、更便于管理的组成部分的技术。',
  },
  {
    id: '5',
    correct: 'C',
    explanation: '参考PMBOK186，在定义活动的输出中，活动清单中罗列了带有活动名称的活动，但是并不是没有活动名称的说法，而且也不严谨。A和B属于排列互动顺序与估算活动持续时间的内容。',
  },
  {
    id: '6',
    correct: 'D',
    explanation: '参考PMBOK190、192，代码编写是前置任务，单元测试是后继任务，这是SS的关系，同时第二个任务在开始后开始，而不是第一个任务开始完成后等待5天再开始，所以是SS-5的关系。',
  },
  {
    id: '7',
    correct: 'B',
    explanation: '参考PMBOK189，B选项是组织过程资产，其他都是事业环境因素，在考核组织过程资产和使用环境因素时，很容易将两者混淆来考。这两个必须要分清楚。',
  },
  {
    id: '8',
    correct: 'A',
    explanation: '参考PMBOK191，确定和整合依赖关系中的强制性依赖关系(也叫硬性依赖关系)。',
  },
  {
    id: '9',
    correct: 'B',
    explanation: '参考PMBOK191，属于选择性依赖关系，书中案例。PMBOK教材中提到的案例，都需要理解，在考试过程中，有可能考核书中案例。',
  },
  {
    id: '10',
    correct: 'D',
    explanation: '参考PMBOK187，除了ABC外，还有紧前关系绘图法，共计四个。',
  },
  {
    id: '11',
    correct: 'C',
    explanation: '参考PMBOK194，项目进度网络图仅仅用来表示活动之间的逻辑关系而已，别无其他。D中，传统的甘特图(横道图)并没有逻辑关系。',
  },
  {
    id: '12',
    correct: 'C',
    explanation: '参考PMBOK186，里程碑的设置是强制或可选的。',
  },
  {
    id: '13',
    correct: 'A',
    explanation: '参考PMBOK200，类比估算是一种粗略的估算方法，在启动阶段可以用来估算项目工期和费用，而且成本比较低，也比较快，准确性比较差，除非当前估算的项目与过去类似的历史项目非常相似。',
  },
  {
    id: '14',
    correct: 'B',
    explanation: '参考PMBOK197，A是收益递减规律，B是资源数量，增加资源并不一定会降低工作时间，因为两个人的技能不一定相同，而且还需要磨合。C是技术进步可能会给估算带来更好的一面，D是员工激励，项目经理要考虑帕金森定律。',
  },
  {
    id: '15',
    correct: 'C',
    explanation: '参考PMBOK200，虽然专家也可以判断，但是专家最终还是用参数来判断的，所以必须清楚最终、最后、最好、紧接着等这样感觉，考试中可能会出现两个很相似的答案，但一定有一个是符合最终、最后、最好、紧接着是什么。',
  },
  {
    id: '16',
    correct: 'D',
    explanation: '参考PMBOK201，没有最平均时间的说法，即便是平均时间，也是不对的。',
  },
  {
    id: '17',
    correct: 'B',
    explanation: '参考PMBOK201，标准差=(38-8)/6=5，26天在一个正的标准差之外(26天之外)，则从26天往右(正态分布)计算，正好是50%-(68.3%/2)=15.92%。考生必须记住正态分布中1，2，3西格玛的区间百分比。',
  },
  {
    id: '18',
    correct: 'B',
    explanation: '参考PMBOK202，这是一个“未知-未知”的场景，需要考虑管理储备，C和D都不是理想的答案。应急储备是应对已知-未知风险，项目经理可以自己应对，管理储备是应对未知-未知风险，项目经理无法自己面对，需要请示更高管理层。',
  },
  {
    id: '19',
    correct: 'B',
    explanation: '参考PMBOK196，应该有最熟悉做这个活动的人员来估算持续时间。',
  },
  {
    id: '20',
    correct: 'A',
    explanation: '参考PMBOK203，这是决策技术。拳头表示不支持，一根手指到五根手，五根手指最支持，三个以下需要继续讨论。',
  },
  {
    id: '21',
    correct: 'D',
    explanation: '参考PMBOK203，会议技术中提到，敏捷项目对活动的估算，是在用户故事分解为任务以后，在任务层面进行的估算。',
  },
  {
    id: '22',
    correct: 'A',
    explanation: '参考PMBOK203.其他均属于制定进度计划中的内容。',
  },
  {
    id: '23',
    correct: 'B',
    explanation: '参考PMBOK213，是一种假设场景的分析和判断，项目组假设某个情况出现后不出现，结果是什么。',
  },
  {
    id: '24',
    correct: 'D',
    explanation: '参考PMBOK205，变更请求是本过程的输出。',
  },
  {
    id: '25',
    correct: 'A',
    explanation: '参考PMOBOK209，B的错误在于，进度网络分析是一个持续的过程，直到进度模型建立完成。资源优化技术也属于进度网络分析的一个方法。',
  },
  {
    id: '26',
    correct: 'C',
    explanation: '参考PMBOK210，关键路径不止一条，但是条数越多对管理越不利。',
  },
  {
    id: '27',
    correct: 'B',
    explanation: '参考PMOBKO210，关键路径是整个项目管理中非常重要的概念，考生必须充分理解关键路径和相关概念。本题中A，不在关键路径上并不能说明活动不重要，在关键路径上也未必重要，只能说他们各自在不同位置而已。B，关键路径上的浮动时间为0、正值或负值，但是不在关键路径上的活动一定是有浮动时间的。C随着项目的推荐，也可能会出现非关键路径任务变成关键路径任务，反之亦然。D与题干无关。',
  },
  {
    id: '28',
    correct: 'A',
    explanation: '参考PMBOK210，先根据提干，画出项目网络图。之后，就很容易判断答案A是正确的。',
  },
  {
    id: '29',
    correct: 'D',
    explanation: '参考PMBOK210，参考上一道题目画出的网络图。',
  },
  {
    id: '30',
    correct: 'B',
    explanation: '参考PMBOK211，请仔细理解教材上的解析。',
  },
  {
    id: '31',
    correct: 'B',
    explanation: '参考PMBOK213，蒙特卡洛技术是一种模拟技术，适用于制定进度计划和定量风险分析。它利用风险和其他不确定性因素，来计算整个项目可能的进度。',
  },
  {
    id: '32',
    correct: 'D',
    explanation: '参考PMBOK215，进度压缩是重要技术，必须充分理解。无论是赶工和快速跟进，都需要考虑关键路径上的活动来执行，因为关键路径决定了项目的总工期长度。快速跟进风险比较大，赶工则会增加成本。',
  },
  {
    id: '33',
    correct: 'A',
    explanation: '参考PMBOK215，有多余资源，看起来任何形式都可以，但是PMP考试的严谨性决定必须有一个更为合适的选择，赶工是通过增加资源来压缩关键路径上的活动完成时间。教材中有明确说明。',
  },
  {
    id: '34',
    correct: 'A',
    explanation: '参考PMBOK216，在敏捷发布计划技术中，从产品愿景开始，驱动产品路线图，再驱动发布计划，再驱动迭代(冲刺)计划，再拆分到最底层可执行任务的行动计划。请详细领悟PMBOK216的图标。随着环境变化的增多，敏捷项目管理将成为趋势。PMP考试并不会涉及太深太多的敏捷考题，所以不用扩展太多敏捷知识，仅限PMBOK中提到的理解即可。',
  },
  {
    id: '35',
    correct: 'B',
    explanation: '参考PMBOK216，查看本页图表，故事点是用于计算故事大小的衡量单位，不是功能交付的表现形式。',
  },
  {
    id: '36',
    correct: 'A',
    explanation: '参考PMBOK217，传统的甘特图(横道图)是没有逻辑关系的条形图，容易读和理解，适用于向管理层汇报。',
  },
  {
    id: '37',
    correct: 'D',
    explanation: '参考PMBOK205，本过程没有组织过程资产和事业环境因素的输出(更新)。',
  },
  {
    id: '38',
    correct: 'B',
    explanation: '参考PMBOK226，A完成第一次迭代后，虽然完成了一部分工作，但是可能在待办项中又增加了新需求，也可能会保持不变，甚至增多。C和A对于，有可能实际剩余工作完成的更快。D，每次迭代的工作量(用故事点表示的话)都是一样的。',
  },
  {
    id: '39',
    correct: 'B',
    explanation: '参考PMBOK215，这是一个加班增加工作时间的行为，增加了单天的工作量，从而压缩了整个项目工期。',
  },
  {
    id: '40',
    correct: 'A',
    explanation: '参考PMBOK210.进度安排的弹性大小由总浮动时间决定，与问题有关只有A和B，但是B是图示技术，用于确定活动之间的逻辑关系而不是进度安排的灵活性。D是分析各种情形，以便使项目进度与计划相符。',
  },
];

const chapter6 = {
  id: 'chapter6',
  title: '第六章:项目进度管理',
  questions,
  answers,
};

export default chapter6;